import { useMutation, useQuery } from "@apollo/client";
import { Button, Empty, Input } from "antd";
import { useState } from "react";
import { GET_CARS, GET_PEOPLE, ADD_PERSON } from "../../api/index";
import PersonCard from "../cards/PersonCard";
import CarForm from "../forms/CarForm";

const HomePage = () => {
  const { data: peopleData, loading: peopleLoading } = useQuery(GET_PEOPLE);
  const { data: carsData, loading: carsLoading } = useQuery(GET_CARS);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const [addPerson] = useMutation(ADD_PERSON, {
    refetchQueries: [{ query: GET_PEOPLE }],
  });

  if (peopleLoading || carsLoading) return <p>Loading...</p>;

  const handleAddPerson = () => {
    addPerson({
      variables: {
        firstName,
        lastName,
      },
    });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        justifyContent: "center",
        alignItems: "center",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
        padding: "1rem",
      }}
    >
      <h1 style={{ marginBottom: "0", marginTop: "0", padding: ".5rem" }}>
        PEOPLE AND THEIR CARS
      </h1>

      <div style={{ textAlign: "center" }}>
        <h2 className="text-xl font-semibold mb-4">Add Person</h2>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Input
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            addonBefore={"First Name"}
          />
          <Input
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            addonBefore={"Last Name"}
          />
          <Button type="primary" onClick={handleAddPerson} disabled={!firstName.trim() || !lastName.trim()} >
            Add Person
          </Button>
        </div>
      </div>

      {!peopleData || peopleData.people?.length === 0 ? (
        <Empty description="No person found" />
      ) : (
        <>
          <div>
            <h2 style={{ textAlign: "center" }}>Add Car</h2>
            <CarForm
              flexDirection="row"
              buttonText="Add Car"
              onSubmit="handleAddCar"
              peopleData={peopleData.people?.filter((person: any) => person !== null) as { id: string; firstName: string; lastName: string; }[]}
            />
          </div>

          <div style={{ width: "100%" }}>
            <h2 style={{ width: "100%", textAlign: "center" }}>Records</h2>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {peopleData.people?.map((person: any) => {
                const filteredCars =
                  carsData!.cars!.filter(
                    (car: any) => car.personId === person.id
                  ) || [];

                return (
                  <PersonCard
                    key={person.id}
                    person={person}
                    cars={filteredCars as []}
                    peopleData={peopleData.people as []}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default HomePage;
