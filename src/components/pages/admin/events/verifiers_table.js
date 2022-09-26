import React from 'react'
import * as Icon from '@iconscout/react-unicons'
import { Btn } from 'components/widgets/btn'

export default function VerifiersTable({ verifiers }) {
  return (
    <>
      {
        verifiers.length <= 0 ? (
          <div className="w-full flex justify-center items-center">
            <p className="">No verifiers enrolled</p>
          </div>
        ) : (
          <table className="table-auto w-full">
            <thead>
              <tr className="p-3">
                <th>Name</th>
                <th>Email</th>
                <th>Phone number</th>
                <th className="text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {
                verifiers.map(({name, email, phone, id}, index) => {
                  return (
                    <tr key={index.toString()}>
                      <td>{ name }</td>
                      <td>{ email }</td>
                      <td>{ phone }</td>
                      <td className="text-center">
                        <div className="p-2">
                          <Btn 
                            content={<Icon.UilPen size={18} />}
                            variant="outlined"
                            className="border-sky-500 btn p-2"
                          />

                          <Btn 
                            content={<Icon.UilBan size={18} />}
                            // variant="outlined"
                            className="bg-rose-500 text-white hover:bg-white hover:text-rose-500 btn p-2 mx-3"
                          />

                          <Btn 
                            content={<Icon.UilTrash size={18} />}
                            variant="outlined"
                            className="border-red-500 btn text-red-500 hover:border-red-600 hover:text-red-600 p-2"
                          />
                        </div>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        )
      }
    </>
  )
}
