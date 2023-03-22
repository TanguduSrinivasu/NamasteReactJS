import "@testing-library/jest-dom"
import { fireEvent, render, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Header from "../Header";
import Cart from "../Cart";
import { StaticRouter } from "react-router-dom/server";
import { Menu_Data } from "../../mocks/data";
import RestarauntMenu from "../RestarauntMenu";


 global.fetch = jest.fn(() => {
   return Promise.resolve({
        json :() => { return Promise.resolve(Menu_Data) } 
    })
 })


 test("Add Items to the Cart", async() => {
    //Load the Body
    const cartValue = render(
      <StaticRouter>
        <Provider store={store}>
            <Header />
          <RestarauntMenu/>
          <Cart/>
        </Provider>
      </StaticRouter>
    );

   // console.log(body);

   await waitFor(() => expect(cartValue.getByTestId("menu")));

    const addBtn = cartValue.getAllByTestId("add-btn");

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);
    fireEvent.click(addBtn[2]);
   
    const cart = cartValue.getByTestId("cartValue");
    expect(cart.innerHTML).toBe('Cart - 3 Items');      //cart value in Header Component

    // const cartComp = cartValue.getByTestId("cart-comp");
    // expect(cartComp.innerHTML).toBe('Cart Items are - 2');  //cart value in Cart Component
})



test("Number of Items in the Cart", async() => {
    //Load the Body
    const cartValue = render(
      <StaticRouter>
        <Provider store={store}>
            <Header />
          <RestarauntMenu/>
          <Cart/>
        </Provider>
      </StaticRouter>
    );

   // console.log(body);

   await waitFor(() => expect(cartValue.getByTestId("menu")));

    const addBtn = cartValue.getAllByTestId("add-btn");

    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);

    const cartComp = cartValue.getByTestId("cart-comp");
    expect(cartComp.innerHTML).toBe('Cart Items are - 3');  //cart value in Cart Component
})