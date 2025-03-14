import { useMutation } from "@apollo/client";
import { Button, Input, Select } from "antd";
import { useState } from "react";
import { ADD_CAR, GET_CARS, UPDATE_CAR } from "../../api/index";

interface CarFormProps {
  flexDirection?: "row" | "column";
  buttonText: string;
  onSubmit: "handleAddCar" | "handleEditCar";
  initialCarData?: {
    id: string;
    year: number;
    make: string;
    model: string;
    price: number;
    personId: string;
  };
  peopleData: { id: string; firstName: string; lastName: string }[];
  setIsModalVisible?: (value: boolean) => void;
}

const CarForm: React.FC<CarFormProps> = ({
  flexDirection = "row",
  buttonText,
  onSubmit,
  initialCarData,
  peopleData,
  setIsModalVisible,
}) => {
  const [car, setCar] = useState(
    initialCarData || { year: 0, make: "", model: "", price: 0, personId: "" },
  );

  const [addCar] = useMutation(ADD_CAR, {
    refetchQueries: [{ query: GET_CARS }],
  });

  const [editCar] = useMutation(UPDATE_CAR, {
    refetchQueries: [{ query: GET_CARS }],
  });

  const handleAddCar = () => {
    addCar({
      variables: {
        year: parseInt(car.year.toString()),
        make: car.make,
        model: car.model,
        price: parseFloat(car.price.toString()),
        personId: car.personId,
      },
    });
  };

  const handleEditCar = () => {
    editCar({
      variables: {
        id: initialCarData!.id,
        year: parseInt(car.year.toString()),
        make: car.make,
        model: car.model,
        price: parseFloat(car.price.toString()),
        personId: car.personId,
      },
    });
    setIsModalVisible!(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection,
        gap: "1rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Input
        placeholder="Year"
        value={car.year === 0 ? "" : car.year.toString()}
        onChange={(e) =>
          setCar({
            ...car,
            year: e.target.value === "" ? 0 : Number(e.target.value),
          })
        }
        addonBefore="Year"
      />
      <Input
        placeholder="Make"
        value={car.make}
        onChange={(e) => setCar({ ...car, make: e.target.value })}
        addonBefore="Make"
      />
      <Input
        placeholder="Model"
        value={car.model}
        onChange={(e) => setCar({ ...car, model: e.target.value })}
        addonBefore="Model"
      />
      <Input
        placeholder="Price"
        value={car.price === 0 ? "" : car.price.toString()}
        onChange={(e) =>
          setCar({
            ...car,
            price: e.target.value === "" ? 0 : Number(e.target.value),
          })
        }
        addonBefore="Price"
      />

      <Select
        style={{ width: "100%" }}
        placeholder="Select a person"
        value={car.personId}
        onChange={(value) => setCar({ ...car, personId: value })}
        options={peopleData.map((person) => ({
          label: `${person.firstName} ${person.lastName}`,
          value: person.id,
        }))}
      />
      <Button
        type="primary"
        onClick={onSubmit === "handleAddCar" ? handleAddCar : handleEditCar}
        disabled={
          buttonText === "Add Car" &&
          (!car.year || !car.make.trim() || !car.model.trim() || !car.price || !car.personId.trim())
        }
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default CarForm;
