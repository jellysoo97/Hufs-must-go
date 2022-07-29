import React, { useState } from "react"
import { MdDone, MdDelete } from "react-icons/md"

import ResPagination from "./Res/ResPagination"

import { useResState, useResDispatch } from "./Res/ResProvider"
import { LandingConDiv } from "./Res/ResSC"
import {
  MyPageItemCheck,
  MyPageItemConDiv,
  MyPageItemDiv,
  MyPageItemRemove,
  MyPageItemName,
  MyPageItemCate,
} from "./StyledComponents"

function MyPage() {
  const state = useResState()
  const dispatch = useResDispatch()
  const [page, setPage] = useState(1)
  const offset = (page - 1) * 6

  const onToggle = (id, e) => dispatch({ type: "TOGGLE", id })
  const onRemove = (id, e) => {
    dispatch({ type: "REMOVE", id })
    alert("마이페이지에서 삭제되었습니다.")
  }

  return (
    <LandingConDiv>
      <MyPageItemConDiv>
        {state &&
          state.slice(offset, offset + 6).map((el, index) => (
            <MyPageItemDiv key={index}>
              <MyPageItemCheck
                done={el.done}
                onClick={(e) => onToggle(el.id, e)}
              >
                {el.done && <MdDone />}
              </MyPageItemCheck>
              <MyPageItemName done={el.done}>{el.name}</MyPageItemName>
              <MyPageItemCate done={el.done}>- {el.category}</MyPageItemCate>
              <MyPageItemRemove onClick={(e) => onRemove(el.id, e)}>
                <MdDelete />
              </MyPageItemRemove>
            </MyPageItemDiv>
          ))}
      </MyPageItemConDiv>
      {state && (
        <ResPagination
          total={state.length}
          limit={6}
          page={page}
          setPage={setPage}
        />
      )}
    </LandingConDiv>
  )
}

export default MyPage
