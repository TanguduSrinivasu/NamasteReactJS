export const filterData = (searchText, allRestaraunts) => {
    const data = allRestaraunts.filter((restaraunt) =>
      restaraunt?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(data);
    return data;
  };