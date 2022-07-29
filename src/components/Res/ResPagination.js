import React from "react"

import { ResPagBtn, ResPagNav } from "./ResSC"

function ResPagination({ total, limit, page, setPage }) {
  const numPages = Math.ceil(total / limit)
  return (
    <>
      <ResPagNav>
        <ResPagBtn onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </ResPagBtn>
        {Array(numPages)
          .fill()
          .map((_, index) => (
            <ResPagBtn
              key={index + 1}
              onClick={() => setPage(index + 1)}
              aria-current={page === index + 1 ? "page" : null}
            >
              {index + 1}
            </ResPagBtn>
          ))}
        <ResPagBtn
          onClick={() => setPage(page + 1)}
          disabled={page === numPages}
        >
          &gt;
        </ResPagBtn>
      </ResPagNav>
    </>
  )
}

export default ResPagination
