import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../../utils/store";
import Header from "../Header";
import { StaticRouter } from "react-router-dom/server";

test("Logo should load on rendering Header", () => {
  //Load the Header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
//   console.log(header);
    const logo = header.getAllByTestId("logo");
    console.log(logo);
    expect(logo[0].src).toBe("http://localhost/dummy.png");
});

test("Online Status should be green on rendering Header", () => {
    //Load the Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );

      //Online Status
      const onlineStatus = header.getByTestId("online-status");
      console.log(onlineStatus);
  
      expect(onlineStatus.innerHTML).toBe('Online🟢');  
      //we used innerHtml because we need to check inside the content that is data between tage
  });
  


  test("cart should have 0 items on rendering Header", () => {
    //Load the Header
    const header = render(
      <StaticRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </StaticRouter>
    );

      //Online Status
      const cartCount = header.getByTestId("cartValue");
      console.log(cartCount);
  
      expect(cartCount.innerHTML).toBe('Cart - 0 Items');  
      //we used innerHtml because we need to check inside the content that is data between tage
  });