import React from 'react'
import styled from 'styled-components'

const ListContainer = styled.div`
  padding: 15px;
`

const Title = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  & > p {
    margin: 0;
  }
  & > p:last-child {
    color: #999;
    cursor: pointer;
  }
`

const History = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
  & > p {
    font-size: 20px;
    margin: 0;
  }
  & > button {
    background: none;
    border: none;
    padding: 0 7px;
    font-size: 14px;
    border: 1px solid #1fcf89;
    border-radius: 20px;
    color: #1fcf89;
    cursor: pointer;
  }
  & > button:focus {
    outline: none;
  }
`

function RecentSearchList({ keywords, onClearList, onRemoveKeyword }) {
  // if (!keywords.length) {
  //   return <div>최근 검색어가 없습니다</div>
  // }

  return (
    <ListContainer>
      <Title>
        <p>최근 검색어</p>
        <p onClick={onClearList}>전체삭제</p>
      </Title>
      {keywords.length > 0 ? (
        keywords.map(({ id, label }) => {
          return (
            <History key={id}>
              <p>{label}</p>
              <button
                onClick={() => {
                  onRemoveKeyword(id)
                }}
              >
                삭제
              </button>
            </History>
          )
        })
      ) : (
        <div>최근 검색어가 없습니다</div>
      )}
    </ListContainer>
  )
}
export default RecentSearchList
