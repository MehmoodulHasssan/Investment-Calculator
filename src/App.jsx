import Calculator from './components/Calculator.jsx'
import ResultsHead from './components/ResultsHead.jsx'
import ResultsBody from './components/ResultsBody.jsx'
import { useState } from 'react'
import { calculateInvestmentResults } from './util/investment.js'

function App() {
  const [annualDataSet, setAnnualDataSet] = useState({
    InitialInvestment: 0,
    AnnualInvestment: 0,
    ExpectedReturn: 0,
    Duration: 0
  })
  const [isInputInvalid, setIsInputInvalid] = useState(false)

  function outPut(value, label) {
    if (label === 'Duration' && value <= 0) {
      setIsInputInvalid(true);
      return;
    }
    if (label === 'Duration' && value > 0) {
      setIsInputInvalid(false);
    }
    const output = `${value} ${label.replace(/\s+/g, '')}`
    const numemricValue = output.split(' ')[0]
    const labelValue = output.split(' ')[1]
    let newData = annualDataSet
    setAnnualDataSet((prevData) => {
      newData = {
        ...prevData,
        [labelValue]: +numemricValue
      }
      return newData
    })
  }
  console.log(isInputInvalid)
  console.log(annualDataSet)

  return (
    <>
      <section id='user-input' className='input-group'>
        <Calculator label='Initial Investment' onPut={outPut} />
        <Calculator label='Annual Investment' onPut={outPut} />
        <Calculator label='Expected Return' onPut={outPut} />
        <Calculator label='Duration' onPut={outPut} />
      </section>

      <table id='result'>
        {
          !isInputInvalid ?
            <>
              <ResultsHead />
              <ResultsBody datas={calculateInvestmentResults(annualDataSet)} />
            </>
            : <p id='error'>Please enter a valid input</p>
        }
      </table>
    </>
  )
}

export default App


// switch (labelValue) {
//   case 'InitialInvestment':
//     InitialInvestment += Number(numemricValue);
//     console.log(InitialInvestment)
//     break;
//   case 'AnnualInvestment':
//     return AnnualInvestment += numemricValue;
//   case 'ExpectedReturn':
//     return ExpectedReturn += numemricValue;
//   case 'Duration':
//     return Duration += numemricValue;
// }