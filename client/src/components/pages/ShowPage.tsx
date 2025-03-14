import { useQuery } from "@apollo/client";
import { Button, Card, Typography } from "antd";
import { Link, useParams } from "react-router-dom";
import { GET_PERSON_WITH_CARS } from "../../api/index";

const { Text } = Typography;

const ShowPage = () => {
  const { id } = useParams<{ id: string }>();
  const {
    data: personWithCarsData,
    loading,
    error,
  } = useQuery(GET_PERSON_WITH_CARS, {
    variables: { id: id || "" },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const person = personWithCarsData?.personWithcars;

  if (!person) {
    return <p>No person found</p>;
  }

  return (
    <div
      style={{
        padding: "24px",
        maxWidth: "900px",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "4rem",
      }}
    >
      <Card title={`${person.firstName} ${person.lastName}`}>
        {person.cars.length === 0 ? (
          <p>No cars available</p>
        ) : (
          person.cars.map((car: any) => (
            <Card
              key={car.id}
              style={{ marginBottom: "1rem" }}
              type="inner"
              title={`${car.year} ${car.make} ${car.model}`}
            >
              <Text strong>Price:</Text> ${car.price.toLocaleString()}<br />
            </Card>
          ))
        )}
      </Card>

      <Link to="/">
        <Button type="primary">Go Back Home</Button>
      </Link>
    </div>
  );
};

export default ShowPage;
