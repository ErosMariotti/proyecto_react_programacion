import { AppProduct } from "./components/AddProduct/AppProduct"
import { ComponentCounter } from "./components/ComponentCounter/ComponentCounter"
import { ComponentUseEffect } from "./components/ComponentUseEffect/ComponentUseEffect"
import { FormComponent } from "./components/FormComponent/FormComponent"
import { MiPrimerComponente } from "./components/MiPrimerCoponent/MiPrimerCoponent"

export const App = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'column', gap:'2vh'}}>
        {/* <MiPrimerComponente text={"texto prueba"} color="red"/>
        <ComponentCounter/>
        <ComponentUseEffect/> */}
        {/* <FormComponent/> */}
        <AppProduct/>
    </div>
  )
}
