import React from 'react'
import axios from 'axios'

const VaultPicker = props => {
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    const fetchData = async () => {
      let result = await axios.get('/api/vault/')
      setData(result.data.content)
    }
    fetchData()
  }, [])

  return (
    <div className="form-group">
      <label>档案所在地</label>
      <select name={props.name || 'vault_id'} value={props.value || 0}
          className="form-control"
          onChange={props.handleChange}
      >
        <option value="0">未选择</option>
        {
          data.map(it => (
            <option value={it.id} key={it.id}>{it.name}</option>
          ))
        }
      </select>
    </div>
  )
}

export default VaultPicker
