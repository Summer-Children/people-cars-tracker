import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useMutation } from "@apollo/client";
import { Button, Card, Modal, Popconfirm, message } from "antd";
import { useState } from "react";
import { DELETE_CAR, GET_CARS } from "../../api/index";
import CarForm from "../forms/CarForm";

interface CarCardProps {
  car: {
    id: string;
    year: number;
    make: string;
    model: string;
    price: number;
    personId: string;
  };
  peopleData: { id: string; firstName: string; lastName: string }[];
}

const CarCard= ({ car, peopleData }: CarCardProps)=> {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const initialCarData = {
    id: car.id,
    year: car.year,
    make: car.make,
    model: car.model,
    price: car.price,
    personId: car.personId,
  };

  const [deleteCar] = useMutation(DELETE_CAR, {
    refetchQueries: [{ query: GET_CARS }],
    optimisticResponse: {
      deleteCar: {
        id: car.id,
        __typename: "Car",
      },
    },
    update(cache) {
      cache.modify({
        fields: {
          cars(existingCars = []) {
            return existingCars.filter(
              (existingCar: any) => existingCar.id !== car.id,
            );
          },
        },
      });
    },
    onCompleted: () => message.success("Car deleted successfully"),
    onError: (error) => message.error(`Error: ${error.message}`),
  });

  const handleDelete = () => {
    deleteCar({ variables: { id: car.id } });
  };

  return (
    <>
      <Card
        type="inner"
        style={{ marginBottom: "16px" }}
        title={`${car.year} ${car.make} ${
          car.model
        }->$${car.price.toLocaleString()}`}
        actions={[
          <div
            style={{
              display: "flex",
            }}
          >
            <Button
              onClick={() => setIsModalVisible(true)}
              style={{ width: "50%", border: "none" }}
              icon={<EditOutlined />}
            />
            <Popconfirm
              title="Are you sure you want to delete this car?"
              onConfirm={handleDelete}
              okText="Yes"
              cancelText="No"
            >
              <Button
                style={{ width: "50%", border: "none" }}
                icon={<DeleteOutlined />}
                danger
              />
            </Popconfirm>
          </div>,
        ]}
      ></Card>

      <Modal
        title="Edit Car"
        open={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <CarForm
          flexDirection="column"
          buttonText="Update Car"
          onSubmit="handleEditCar"
          initialCarData={initialCarData}
          peopleData={peopleData}
          setIsModalVisible={setIsModalVisible}
        />
      </Modal>
    </>
  );
};

export default CarCard;