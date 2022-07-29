import React, { useState } from "react"
import { ReactComponent as Kr } from "../../images/bibimbap.svg"
import { ReactComponent as Jp } from "../../images/sushi.svg"
import { ReactComponent as West } from "../../images/burger.svg"
import { ReactComponent as Cn } from "../../images/dimsum.svg"
import { ReactComponent as Cafe } from "../../images/cafeteria.svg"

import ResPagination from "./ResPagination"
import {
  ResItemCate,
  ResItemConDiv,
  ResItemDiv,
  ResItemIcon,
  ResItemName,
} from "./ResSC"

function ResItem({ data }) {
  const [page, setPage] = useState(1)
  const offset = (page - 1) * 6

  return (
    <>
      <ResItemConDiv>
        {data &&
          data.slice(offset, offset + 6).map((el, index) => (
            <ResItemDiv key={index}>
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
