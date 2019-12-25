import React from 'react'

import VaultPicker from '../../mds/components/VaultPicker'

export default function Form(props) {
  return (
    <>
      <div className="row">
        <div className="form-group col-3">
          <label>档案号</label>
          <input type="text" name="sn" value={props.data.sn || ''}
            className="form-control"
            onChange={props.handleChange}
          />
        </div>

        <div className="form-group col">
          <label>附加档案号</label>
          <input type="text" name="sn_alt" value={props.data.sn_alt || ''}
            className="form-control"
            onChange={props.handleChange}
            readOnly
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group col">
          <label>身份证</label>
          <input type="text" name="identity" value={props.data.identity || ''}
            className="form-control"
            onChange={props.handleChange}
            onBlur={props.handleIdentityBlur}
          />
        </div>

        <div className="form-group col">
          <label>姓名</label>
          <input type="text" name="name" value={props.data.name || ''}
              className="form-control"
              onChange={props.handleChange}
          />
        </div>

        <div className="form-group col">
          <label>出生日期</label>
          <input type="text" name="birthday" value={props.data.birthday || ''}
              className="form-control"
              onChange={props.handleChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group col">
          <label>参加工作时间</label>
          <input type="text" name="cangongshijian" value={props.data.cangongshijian || ''}
              className="form-control"
              onChange={props.handleChange}
          />
        </div>

        <div className="form-group col">
          <label>职称</label>
          <input type="text" name="zhicheng" value={props.data.zhicheng || ''}
              className="form-control"
              onChange={props.handleChange}
          />
        </div>

        <div className="form-group col">
          <label>工龄</label>
          <input type="text" name="gongling" value={props.data.gongling || ''}
              className="form-control"
              onChange={props.handleChange}
          />
        </div>
      </div>

      <div className="row">
        <div className="form-group col">
          <label>预退休日期</label>
          <input type="text" name="yutuixiuriqi" value={props.data.yutuixiuriqi || ''}
              className="form-control"
              onChange={props.handleChange}
          />
        </div>

        <div className="form-group col">
          <label>退休日期</label>
          <input type="text" name="tuixiuriqi" value={props.data.tuixiuriqi || ''}
              className="form-control"
              onChange={props.handleChange}
          />
        </div>

        <div className="form-group col">
          <label>联系电话</label>
          <input type="text" name="phone" value={props.data.phone || ''}
            className="form-control"
            onChange={props.handleChange}
          />
        </div>
      </div>

      <div className="form-group">
        <label>备注</label>
        <input type="text" name="remark" value={props.data.remark || ''}
            className="form-control"
            onChange={props.handleChange}
        />
      </div>

      <VaultPicker name="vault_id" value={props.data.vault_id} handleChange={props.handleChange} />
    </>
  )
}