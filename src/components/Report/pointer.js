import React, {useRef} from 'react'
import styled from 'styled-components'
import GaugeComponent from 'react-gauge-component'

function Pointer(props) {   
    const [targetValue, setTargetValue] = React.useState(props.Value);
    React.useEffect(() => {

    }, [])

  return (
    <GaugeComponent
        arc={{
            subArcs: [
            {
                limit: 20,
                color: '#EA4228',
                showMark: true
            },
            {
                limit: 40,
                color: '#F58B19',
                showMark: true
            },
            {
                limit: 60,
                color: '#F5CD19',
                showMark: true
            },
            {
                limit: 100,
                color: '#5BE12C',
                showMark: true
            },
            ]
        }}
        labels={{
            valueLabel: { 
                style:{
                    fill: '#363636',
                    textShadow: '0',
                }
            },
            markLabel: {
                valueConfig: {
                    style:{
                        fontSize: '14px',
                        fill: '#363636',
                        textShadow: '0',
                    }
                },
                markerConfig: {
                    style:{
                        fill: '#363636',
                        textShadow: '0',
                    }
                }
            }
        }}
        value={targetValue}
    />
  )
}

export default Pointer