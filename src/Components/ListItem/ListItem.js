/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'
import { cx, css } from 'emotion'

const ListItem = ({ data }) => {
  let id = 0
  id = data.url.split('/')
  // second last index because of trailing /
  // this is for fallback calling.
  id = id[id.length - 2]
  const listItem = css`
  text-decoration: none;
  color: black;
  background-color: #eee;
  width: 100%;
  display: block;
  padding: 30px;
  margin-bottom:  10px;
  transition: ease background-color .3s;
  &:hover{
    background-color:#ddd;
  transition: ease background-color .3s;
`
  return (
    <Link
      to={`/ship/${id}`}
      className={css`
        text-decoration: none;
      `}
    >
      <div
        className={cx(listItem, 'listItem')}
      >
        <strong>{data.name}</strong><br />
        Made By: {data.manufacturer} <br />
        Cost: {data.cost_in_credits}
      </div>
    </Link>
  )
}

export default ListItem
