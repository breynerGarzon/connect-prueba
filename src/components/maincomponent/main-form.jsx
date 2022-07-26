import { useState, useEffect } from "react";
import SelectGeneric from "../shared/select-generic";
import InputGeneric from "../shared/input-generic";
import { getYear, getBrand, getModel } from "../../services/data-services";

function MainForm(props) {
  const [year, setYear] = useState([]);
  const [brandData, setBrandData] = useState([]);
  const [dataModel, setDataModel] = useState([]);
  const [dataUser, setDataUser] = useState({
    primerNombre: "Breyner",
    apellidos: "Garzón",
    telefono: "3003487553",
    anio: "",
    marca: "",
    modelo: "",
  });

  useEffect(() => {
    setYear(getYear());
  }, []);

  const handleChangeYear = (event) => {
    setDataUser({ ...dataUser, anio: event.target.value });
    setBrandData([]);
    setDataModel([]);
    setBrandData(getBrand(event.target.value));
  };

  const handleChangeBrand = (event) => {
    setDataModel([]);
    setDataUser({ ...dataUser, marca: event.target.value });
    setDataModel(getModel(dataUser.anio, event.target.value));
  };

  const handleChangeModel = (event) => {
    console.log("handleChangeModel", event.target.value);
  };

  const handleInputProperty = (event) => {
    const { id, value } = event.target;
    setDataUser({ ...dataUser, [id]: value });
  };

  const displayYear = () => {
    return (
      year.length > 0 && (
        <SelectGeneric
          options={year}
          selected={dataUser.anio}
          description={"Año"}
          optionSelected={handleChangeYear}
        ></SelectGeneric>
      )
    );
  };

  const displayBrand = () => {
    return (
      brandData.length > 0 && (
        <SelectGeneric
          options={brandData}
          selected={dataUser.marca}
          description={"Marca"}
          optionSelected={handleChangeBrand}
        ></SelectGeneric>
      )
    );
  };

  const displayModel = () => {
    return (
      dataModel.length > 0 && (
        <SelectGeneric
          options={dataModel}
          selected={dataUser.modelo}
          description={"Modelo"}
          optionSelected={handleChangeModel}
        ></SelectGeneric>
      )
    );
  };

  return (
    <div className="App">
      <p>Hello form Manin</p>
      <InputGeneric
        description="Primer Nombre"
        fieldName="primerNombre"
        type="text"
        valueField={dataUser.primerNombre}
        changeValue={handleInputProperty}
      ></InputGeneric>
      <InputGeneric
        description="Apellido"
        fieldName="apellidos"
        type="text"
        valueField={dataUser.apellidos}
        changeValue={handleInputProperty}
      ></InputGeneric>
      <InputGeneric
        description="Teléfono"
        fieldName="telefono"
        type="number"
        valueField={dataUser.telefono}
        changeValue={handleInputProperty}
      ></InputGeneric>
      {displayYear()}
      {displayBrand()}
      {displayModel()}
    </div>
  );
}

export default MainForm;
