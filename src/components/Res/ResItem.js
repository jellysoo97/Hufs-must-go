import React, { useState } from "react"
import { MdAdd } from "react-icons/md"

import { ReactComponent as Kr } from "../../images/bibimbap.svg"
import { ReactComponent as Jp } from "../../images/sushi.svg"
import { ReactComponent as West } from "../../images/burger.svg"
import { ReactComponent as Cn } from "../../images/dimsum.svg"
import { ReactComponent as Cafe } from "../../images/cafeteria.svg"
import {
  ResItemCate,
  ResItemConDiv,
  ResItemDiv,
  ResItemIcon,
  ResItemName,
  ResItemAdd,
} from "./ResSC"

import ResPagination from "./ResPagination"
import { useResDispatch, useResNextId, useResState } from "./ResProvider"

function ResItem({ data }) {
  const state = useResState()
  const names = [].concat(state.map((el) => el.name))
  const [page, setPage] = useState(1)
  const offset = (page - 1) * 6

  const dispatch = useResDispatch()
  const nextId = useResNextId()

  const handleAdd = (el, e) => {
    e.preventDefault()
    if (!names.includes(el.name)) {
      dispatch({
        type: "CREATE",
        res: {
          id: nextId.current,
          name: el.name,
          category: el.category,
          done: false,
          review: 0,
        },
      })
      nextId.current += 1
      alert("마이페이지에 추가되었습니다.")
    } else {
      alert("이미 마이페이지에 있는 식당입니다.")
    }
  }

  return (
    <>
      <ResItemConDiv>
        {data &&
          data.slice(offset, offset + 6).map((el, index) => (
            <ResItemDiv key={index} onClick={(e) => handleAdd(el, e)}>
              <ResItemIcon>
                {el.category === "한식" && (
                  <Kr width="30px" height="30px" fill="#7da848" />
                )}
                {el.category === "일식" && (
                  <Jp width="30px" height="30px" fill="#ee560f" />
                )}
                {el.category === "양식" && (
                  <West width="30px" height="30px" fill="#c9a970" />
                )}
                {el.category === "중식" && (
                  <Cn width="30px" height="30px" fill="#a39531" />
                )}
                {el.category === "카페" && (
                  <Cafe width="30px" height="30px" fill="#52a2f2" />
                )}
              </ResItemIcon>
              <ResItemName>{el.name}</ResItemName>
              <ResItemCate>- {el.category}</ResItemCate>
              <ResItemAdd>
                <MdAdd />
              </ResItemAdd>
            </ResItemDiv>
          ))}
      </ResItemConDiv>
      {data && (
        <ResPagination
          total={data.length}
          limit={6}
          page={page}
          setPage={setPage}
        />
      )}
    </>
  )
}

export default ResItem
