import React from 'react';
import { Table } from 'semantic-ui-react'


class Product extends React.Component {

  render(){
    return(
   	<div>
   	<section id='products'>
   	<p className='label'>Products</p>
    <Table className="table" compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Rule Engine</Table.HeaderCell>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Current Version</Table.HeaderCell>
          <Table.HeaderCell>Category</Table.HeaderCell>
          <Table.HeaderCell>Currency</Table.HeaderCell>
          <Table.HeaderCell>@min premium</Table.HeaderCell>
          <Table.HeaderCell>@min rate</Table.HeaderCell>
          <Table.HeaderCell>@min deductible</Table.HeaderCell>
          <Table.HeaderCell>Rate Basis</Table.HeaderCell>
          <Table.HeaderCell>Product Nr</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>None</Table.Cell>
          <Table.Cell>None</Table.Cell>
          <Table.Cell>None</Table.Cell>
          <Table.Cell>None</Table.Cell>
          <Table.Cell>None</Table.Cell>
          <Table.Cell>None</Table.Cell>
          <Table.Cell>None</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </section>

    <section id='productVersion'>
    <p className='label'>Product Version</p>
    <Table className="table" compact >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Changelog</Table.HeaderCell>
          <Table.HeaderCell>Staff</Table.HeaderCell>
          <Table.HeaderCell>TS</Table.HeaderCell>
          <Table.HeaderCell>Version</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>None</Table.Cell>
          <Table.Cell>None</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </section>

    <section id='productFunction'>
    <p className='label'>SQL Function</p>
    <Table className="table" compact >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Function</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </section>

    <section id='productOffices'>
    <p className='label'>Product Offices</p>
    <Table className="table" compact >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Mandant</Table.HeaderCell>
          <Table.HeaderCell>Order by</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </section>

    <section id='productCurrencies'>
    <p className='label'>Product Currencies</p>
    <Table className="table" compact >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Currency</Table.HeaderCell>
          <Table.HeaderCell>xrate</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </section>

    <section id='productOutput'>
    <p className='label'>Product Output</p>
    <Table className="table" compact >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Output</Table.HeaderCell>
          <Table.HeaderCell>Deafault Basis</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </section>

    <section id='productCalculations'>
    <p className='label'>Product Calculations</p>
    <Table className="table" compact >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Property</Table.HeaderCell>
          <Table.HeaderCell>Compute Order</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </section>

    <section id='productHprod'>
    <p className='label'>Hprod</p>
    <Table className="table" compact >
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>IBS Product</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
    </section>

    </div>
    );
  }
}

export default Product;
