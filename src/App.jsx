import './App.css'
import {GrFormNext, GrFormPrevious} from 'react-icons/gr'
import{FiSend} from 'react-icons/fi'
import  UserForm from './componentes/UserForm'
import  ReviewForm from './componentes/ReviewForm'
import  Thanks from './componentes/Thanks'
import UseForm from './hooks/UseForm'
import Steps from './componentes/Steps'
import { useState } from 'react'
import Final from './componentes/Final'
const formTemplate ={
  name:"",
  email:"",
  review:"",
  comment:"",
};
function App() {
  const[data,setData]= useState(formTemplate)

  const updateFieldHandler=(key,value)=>{
    setData((prev)=>{
      return{...prev,[key]:value}
    })
  }
  const FormComponents=[
  <UserForm data={data} updateFieldHandler={updateFieldHandler}/>,
  <ReviewForm data={data} updateFieldHandler={updateFieldHandler}/>,
  <Thanks data={data}/>]
  const {currentStep,currentComponent,changeStep,isLastStep,isFirstStep} = UseForm(FormComponents)
  const [mostrarNovaTela, setMostrarNovaTela] = useState(false);
    function mostrarNovaTelaHandler() {
      setMostrarNovaTela(true);
    }
    
  return (
    <div className="app">
      <div className="header">
        <h2>Deixe sua avaliação</h2>
        <p>Ficamos felizes com sua compra, utilize o formulário abaixo para avaliar o produto</p>
      </div>
      {mostrarNovaTela ? (
        <div>
          <Final />
        </div>
      ) : (
        <div className="form-container">
          <Steps currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className="inputs-container">{currentComponent}</div>
            <div className="actions">
              {!isFirstStep && (
                <button type="button" onClick={() => changeStep(currentStep - 1)}>
                  <GrFormPrevious />
                  <span>Voltar</span>
                </button>
              )}
              {!isLastStep ? (
                <button type="submit">
                  <GrFormNext />
                  <span>Avançar</span>
                </button>
              ) : (
                <button type="button" onClick={mostrarNovaTelaHandler}>
                  <FiSend />
                  <span>Enviar</span>
                </button>
              )}
            </div>
          </form>
        </div>
      )}
    </div>
  );
}

export default App;
