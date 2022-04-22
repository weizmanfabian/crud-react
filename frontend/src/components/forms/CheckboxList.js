import React, { Fragment, useEffect, useState } from 'react'

//Permite enumerar y listar checkbutton
export const CheckboxListObj = ({
    isEdit,
    initialArray,
    set,
    checkList,
    length,
    setLength
}) => {

    const [list, setList] = useState([]);
    const [arreglo, setArreglo] = useState('');

    useEffect(() => {
        console.log(initialArray)
        if (isEdit && initialArray.filter(v => v.checked == true).length > 0) {
            setList(initialArray)
            setArreglo(initialArray.map(v => v.value).join(', '))
        }
    }, [initialArray])

    const handleChange = async (e, obj) => {
        const { checked } = e.target;

        let res;

        if (checked) {
            obj.checked = checked;
            res = [].concat(list, [obj])
        } else {
            obj.checked = checked;
            res = list.filter(v => v.name !== obj.name)
        }


        setList(res)
        console.log(res)


        setLength(res.length)
        setArreglo(res.map(m => m.value).join(', '))
        set(res)
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
                                name={item.name}
                                value={item.value}
                                defaultChecked={isEdit
                                    ? initialArray.filter(v => v.checked === true).length > 0
                                        ? initialArray.find(v => v.name === item.name)
                                        : false
                                    : item.checked
                                }
                                onChange={(e) => handleChange(e, item)}
                            />
                            <label>{item.value}</label>
                        </div>
                    )
                )
            }

            <div className='row'>
                <div className='col-1'>
                    <label className='form-control'># {length} </label>
                </div>
                <div className='col-11'>
                    <label className='form-control'>Adicionales: {arreglo}</label>
                </div>

            </div>
        </Fragment>
    )
};

