import React from "react";
import {graphql} from "gatsby";

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react"

export const query = graphql`
  {
    allContentfulCity {
      edges {
        node {
          id
          name
          description
          location {
            lat
            lon
          }
          gatsbyPath(filePath: "/city/{contentfulCity.name}")
        }
      }
    }
  }
`

export default function Home({data}) {
  return(
    <div>
      <h1>
      Hi, I´m the home page 
      </h1>
      <ul>
        {
          data.allContentfulCity.edges.map(({node:city}) => (
            <li
              key = {city.name} ><a href={city.gatsbyPath} >
                {city.name}</a>
              {city.description} - {city.location.lon} - {city.location.lat}
            </li>
          ))
        }
      </ul>
    </div>
  )
}