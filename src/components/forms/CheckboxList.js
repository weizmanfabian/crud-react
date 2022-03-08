import React, { Fragment, useState } from 'react'

//Permite enumerar y listar checkbutton
const CheckboxList = ({
    set,
    value,
    checkList,
    setLength,
    length
}) => {

    const [list, setList] = useState([]);

    //Crea una lista con los valores seleccionados 
    const validateCheck = async (e) => {
        let res1 = await e.target.checked
            ?
            [].concat(list, e.target.value)
            :
            list.filter(v => v !== e.target.value)
        //crea una lista eliminando el valor seleccionado

        let output = await res1.join(', ')
        setLength(res1.length)
        setList(res1)
        set(output)
    }

    return (
        <Fragment>
            {
                checkList.map(
                    (item, index) => (
                        <div key={index} className="form-check">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                value={item}
                                onClick={(e) => {
                                    validateCheck(e)
                                }}
                            />
                            <label>{item}</label>
                        </div>
                    )
                )
            }

            <div className='row'>
                <div className='col-1'>
                    <label className='form-control'># {length}</label>
                </div>
                <div className='col-11'>
                    <label className='form-control'>Adicionales: {value}</label>
                </div>

            </div>
        </Fragment>
    )
};

export default CheckboxList