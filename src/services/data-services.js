const cars = [
  { Anio: "2020", Marca: "Acura", Modelo: "TLX" },
  { Anio: "2020", Marca: "Acura", Modelo: "RDX" },
  { Anio: "2020", Marca: "Toyota", Modelo: "Yaris" },
  { Anio: "2020", Marca: "Toyota", Modelo: "Corolla" },
  { Anio: "2019", Marca: "Toyota", Modelo: "Camry" },
  { Anio: "2019", Marca: "BMW", Modelo: "2 Series" },
  { Anio: "2019", Marca: "BMW", Modelo: "3 Series" },
];

export const getYear = () => {
  const years = cars.map((car) => car.Anio);
  const uniqueYear = Array.from(new Set(years));

  return uniqueYear.map((year) => {
    return { value: year, text: year };
  });
};

export const getBrand = (yearSelected) => {
  const brands = [];
  cars.map((car) => {
    if (car.Anio === yearSelected) brands.push(car.Marca);
  });
  const uniqueBrand = Array.from(new Set(brands));

  return uniqueBrand.map((brand) => {
    return { value: brand, text: brand };
  });
};

export const getModel = (yearSelected, brandSelected) => {
  const models = [];
  cars.map((car) => {
    if (car.Anio === yearSelected && car.Marca === brandSelected)
      models.push(car.Modelo);
  });
  const uniqueModels = Array.from(new Set(models));

  return uniqueModels.map((brand) => {
    return { value: brand, text: brand };
  });
};
