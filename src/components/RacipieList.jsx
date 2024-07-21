import React from 'react'
import { Container, Header, Grid } from 'semantic-ui-react'
import RecipeListItem from './RacipeListItem'

export default function RacipieList({ recipes, searchQuery }) {
  return (
    <Container>
    <Header
    size='huge'
    content={`RECIPE LIST FOR ${searchQuery.toUpperCase()} `}
    textAlign='center'
    style={{marginBottom:'20px'}}
    />
    <Grid columns={4} doubling>
        {
            recipes && recipes.map((recipe, index) => (
                <Grid.Column key={index} mobile={16} tablet={8} computer={4}>
                    <RecipeListItem recipe={recipe}/>
                </Grid.Column>
            ))
        }
    </Grid>
    </Container>
  )
}
