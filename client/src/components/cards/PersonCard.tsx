import { Card, Button, Empty, Popconfirm, Input, Form, Modal } from "antd";
import { useMutation } from "@apollo/client";
import { DELETE_CAR, DELETE_PERSON, GET_CARS, GET_PEOPLE, UPDATE_PERSON } from "../../api/index";
import { CarCard } from "./index";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Link } from "react-router-dom";

interface PersonCardProps {
  person: {
    id: string;
    firstName: string;
    lastName: string;
  };
  cars: {
    id: string;
    year: number;
    make: string;
    model: string;
    price: number;
    personId: string;
  }[];
  peopleData: {
    id: string;
    firstName: string;
    lastName: string;
  }[];
}

const PersonCard = ({ person, cars, peopleData}: PersonCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editedFirstName, setEditedFirstName] = useState(person.firstName);
  const [editedLastName, setEditedLastName] = useState(person.lastName);

  const [editPerson] = useMutation(UPDATE_PERSON, {
    refetchQueries: [{ query: GET_PEOPLE }],
  });

  const [deletePerson] = useMutation(DELETE_PERSON, {
    refetchQueries: [{ query: GET_PEOPLE }],
  });

  const[deleteCar] = useMutation(DELETE_CAR, {
    refetchQueries: [{ query: GET_CARS }],
  });

  const handleEditPerson = () => {
    editPerson({
      variables: {
        id: person.id,
        firstName: editedFirstName,
        lastName: editedLastName,
      },
    });
    setIsModalVisible(false);
  };

  const handleDeletePerson = () => {
    deletePerson({ variables: { id: person.id } });
    cars.forEach((car) => {
      deleteCar({ variables: { id: car.id } });
    });
  };

  return (
    <Card
      title={`${person.firstName} ${person.lastName}`}
      actions={[
        <div style={{ display: "flex" }}>
          <Button
            onClick={() => setIsModalVisible(true)}
            style={{ width: "50%", border: "none" }}
            icon={<EditOutlined />}
          />
          <Popconfirm
            title="Are you sure you want to delete this person?"
            onConfirm={handleDeletePerson}
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
    >
      {cars.length === 0 ? (
        <Empty description="No cars available" />
      ) : (
        cars.map((car) => (
          <CarCard key={car.id} car={car} peopleData={peopleData} />
        ))
      )}
      
        <Link to={`/person/${person.id}`}>
          <Button type="link">Learn More</Button>
        </Link>
      <Modal
        title="Edit Person"
        open={isModalVisible}
        onOk={handleEditPerson}
        onCancel={() => setIsModalVisible(false)}
        okText="Save"
        cancelText="Cancel"
      >
        <Form layout="vertical">
          <Form.Item label="First Name">
            <Input
              value={editedFirstName}
              onChange={(e) => setEditedFirstName(e.target.value)}
            />
          </Form.Item>
          <Form.Item label="Last Name">
            <Input
              value={editedLastName}
              onChange={(e) => setEditedLastName(e.target.value)}
            />
          </Form.Item>
        </Form>
      </Modal>
    </Card>
  );
};

export default PersonCard;
