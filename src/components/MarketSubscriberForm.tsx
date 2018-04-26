import React from 'react';
import {Button, Form, Icon, Input} from 'antd';
import { FormComponentProps } from 'antd/lib/form';

import {MarketText} from '@src/Styles';

const FormItem = Form.Item;

interface Props extends FormComponentProps {
  title: string,
  hint: string
}

/**
 * Simple subscription form to subscriping to different GetResponse Lists.
 * Just specify the campaignToken for the list and it should work out of the box
 *
 */
class MarketSubscriberForm extends React.Component<Props> {
  handleSubmit = (e: Event) => {
    this.props.form.validateFields((errors, _) => {
      if (errors) {
        e.preventDefault();
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (<div>
      <MarketText style={{fontSize: '24px', marginBottom: '30px'}}>{this.props.title}</MarketText>
      <Form action="https://marketprotocol.us17.list-manage.com/subscribe/post" onSubmit={this.handleSubmit} acceptCharset="utf-8" method="post">
        <input type="hidden" name="u" value="ef1f265a21b4aae9002084ee3" />
        <input type="hidden" name="id" value="491f750dec" />
      
        <FormItem>
          {getFieldDecorator('email', {
            rules: [
              { required: true, message: 'Please input an Email!' },
              { type: 'email', message: 'Please input a correct Email' }
            ],
          })(
            <Input
              name="MERGE0"
              placeholder={this.props.hint}
              suffix={(
                <Button className="search-btn" htmlType="submit" size="large" type="primary" style={{padding: '0 10px', height: '38px'}}>
                  <Icon type="arrow-right" />
                </Button>
              )} />
          )}
        </FormItem>
        {/* These are the field name for these parameters in mailchimp */}
        {/* <input type="text" name="MERGE1" id="MERGE1" /> */} {/*First Name*/}
        {/* <input type="text" name="MERGE2" id="MERGE2" /> */} {/*Last Name*/}
      </Form>
    </div>);
  }
}

const WrappedForm = Form.create()(MarketSubscriberForm);

export default WrappedForm;
