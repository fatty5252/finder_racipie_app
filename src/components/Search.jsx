import { useState } from 'react'
import React from 'react'
import { Grid, Form, Input } from 'semantic-ui-react'

export default function Search({setSerachQuery}) {

    const [value, setValue] = useState('');

    const onFormSubmit = () => {
        // e.preventDefault();
        setSerachQuery(value);
        // console.log(value);
    }


  return (
    <div>
      <Grid columns={2} textAlign='center' className='search-box'>
        <Grid.Column>
            <h2 className='search-heading'>Search Recipes with <span style={{color:"#74AAEA"}}> Our Recipes </span></h2>
            <h3 style={{marginBottom:'20px'}}>Input Recipes seprated by comma</h3>
            <Form onClick={onFormSubmit}>
                <Input size='big'
                placeholder='Enter Ingredients'
                action={{icon:'search', color:'blue'}}
                onChange={(e)=>setValue(e.target.value)}
                value={value}
                style={{marginBottom:'20px'}}
                />
            </Form>
        </Grid.Column>
      </Grid>
    </div>
  )
}
