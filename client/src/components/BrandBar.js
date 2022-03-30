import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card} from "react-bootstrap";

const BrandBar = observer(() => {
  const {device} = useContext(Context)
    return (
      <div className="d-flex">
        {device.brands.map(brand =>
        <Card key={brand.id}
              style={{cursor: 'pointer', width: 150, textAlign: "center"}}
              onClick={() => device.setSelectedBrand(brand)}
              border={brand.id === device.selectedBrand.id  ? 'danger' : 'dark'}
              className="p-2 mt-2 m-2">
          {brand.name}
        </Card>
        )}
      </div>
    )
  }
)

export default BrandBar;