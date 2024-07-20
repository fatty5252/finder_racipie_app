import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button, Grid, Image, Segment } from "semantic-ui-react";
import { getRacipe } from "../services/api";
import Header from "./Header";

const RecipesDetails = () => {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      let response = await getRacipe(id);
      if (response && response.recipe) {
        setRecipe(response.recipe);
      }
    };
    getData();
  }, []);

  return (
    <>
      Object.keys(recipe)?.length ?
      <Grid container stackable columns={2} className="details_pageContent ">
        <Grid.Column>
          <Button
            as={Link}
            to={"/racipies"}
            content="Back to recipe List"
            color="yellow"
            style={{ marginBottom: "40px" }}
          />
          <Image src={recipe.image_url} />
        </Grid.Column>     
        <Grid.Column>
          <Header size="medium">{recipe.title}</Header>
          <p>Provided By : {recipe.publisher}</p>
          <Button
            as={"a"}
            href={recipe.publisher_url}
            target="_blank"
            content="Publisher Webpage"
            color="blue"
          />
          <Button
            as={"a"}
            href={recipe.source_url}
            target="_blank"
            content="Recipe URL"
            color="green"
          />
          <Header size="large" content="Ingredients" />
          <Segment.Group>
            {recipe &&
              recipe.ingredients?.map((data, index) => (
                <Segment key={index}>
                  <h5>{data}</h5>
                </Segment>
              ))}
          </Segment.Group>
        </Grid.Column>
      </Grid>{" "}
      : null
    </>
  );
};

export default RecipesDetails;
