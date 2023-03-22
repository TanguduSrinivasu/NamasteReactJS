import "@testing-library/jest-dom"
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Body from "../Body";
import { StaticRouter } from "react-router-dom/server";
import { Restaraunt_Data } from "../../mocks/data";


 global.fetch = jest.fn(() => {
   return Promise.resolve({
        json :() => { return Promise.resolve(Restaraunt_Data) } 
    })
 })
 //because there are two awaits while fetching feo getting the restaurant data

test("Shimmer should load on HomePage", () => {
    //Load the Body
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );

   // console.log(body);

    const shimmer = body.getByTestId("shimmer");
    console.log(shimmer);

    //  expect(shimmer).toBeInTheDocument();//checks Shimmer is loaded in the document or not
     expect(shimmer.children.length).toBe(15);
})


test("Restaraunt should load on HomePage", async() => {
    //Load the Body
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );

   // console.log(body);

   await waitFor(() => expect(body.getByTestId('search-btn')));

    const restList = body.getByTestId("rest-list");
    console.log(restList);

    //  expect(shimmer).toBeInTheDocument();//checks Shimmer is loaded in the document or not
     expect(restList.children.length).toBe(15);
})



test("Search for String Food on HomePage", async() => {
    //Load the Body
    const body = render(
      <StaticRouter>
        <Provider store={store}>
          <Body />
        </Provider>
      </StaticRouter>
    );

   // console.log(body);

   await waitFor(() => expect(body.getByTestId("search-btn")));

    const searchInput = body.getByTestId("search-input");
    console.log(searchInput);

    fireEvent.change(searchInput , {
        target : {
            value : "food"         //e.target.value
        }
    })

    const searchBtn = body.getByTestId("search-btn")

    fireEvent.click(searchBtn)
   
    const restList = body.getByTestId("rest-list");
    expect(restList.children.length).toBe(3);
})