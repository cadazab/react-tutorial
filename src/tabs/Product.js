import React from 'react';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';


class Product extends React.Component {

  render(){
    return(
    	<div className = "product">
        <section className="table" id="products">
		    <label>Products</label>
		      <Table selectable={true} className="test">
			    <TableHeader displaySelectAll={false}>
			      <TableRow>
			        <TableHeaderColumn>Rule Engine</TableHeaderColumn>
			        <TableHeaderColumn>Name</TableHeaderColumn>
			        <TableHeaderColumn>CurrenT Version</TableHeaderColumn>
			        <TableHeaderColumn>Category</TableHeaderColumn>
			        <TableHeaderColumn>Currency</TableHeaderColumn>
			        <TableHeaderColumn>@min premium</TableHeaderColumn>
			        <TableHeaderColumn>@min rate</TableHeaderColumn>
			        <TableHeaderColumn>@min deductible</TableHeaderColumn>
			        <TableHeaderColumn>Rate basis</TableHeaderColumn>
			        <TableHeaderColumn>Product Nr</TableHeaderColumn>
			        <TableHeaderColumn>Product Nr</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody>
			      <TableRow>
			        <TableRowColumn>Legal NT</TableRowColumn>
			        <TableRowColumn>Legal NT</TableRowColumn>
			        <TableRowColumn>156</TableRowColumn>
			        <TableRowColumn>Hull</TableRowColumn>
			        <TableRowColumn>EUR</TableRowColumn>
			        <TableRowColumn>0</TableRowColumn>
			        <TableRowColumn>0</TableRowColumn>
			        <TableRowColumn>0</TableRowColumn>
			        <TableRowColumn>0</TableRowColumn>
			        <TableRowColumn>4</TableRowColumn>
			        <TableRowColumn>4</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>Hull</TableRowColumn>
			        <TableRowColumn>Hull</TableRowColumn>
			        <TableRowColumn>156</TableRowColumn>
			        <TableRowColumn>Hull</TableRowColumn>
			        <TableRowColumn>EUR</TableRowColumn>
			        <TableRowColumn>0</TableRowColumn>
			        <TableRowColumn>0</TableRowColumn>
			        <TableRowColumn>0</TableRowColumn>
			        <TableRowColumn>0</TableRowColumn>
			        <TableRowColumn>4</TableRowColumn>
			        <TableRowColumn>4</TableRowColumn>
			      </TableRow>
			      
			    </TableBody>
			  </Table>
		</section>

		<section className="table" id="productFunction">
		    <label>Product SQL-Function</label>
		      <Table selectable={true}>
			    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
			      <TableRow>
			        <TableHeaderColumn>Changelog</TableHeaderColumn>
			        <TableHeaderColumn>Staff</TableHeaderColumn>
			        <TableHeaderColumn>Ts</TableHeaderColumn>
			        <TableHeaderColumn>Version</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody displayRowCheckbox={false}>
			      <TableRow className="tableRow">
			        <TableRowColumn>Legal NT</TableRowColumn>
			        <TableRowColumn>Legal NT</TableRowColumn>
			        <TableRowColumn>156</TableRowColumn>
			        <TableRowColumn>Hull</TableRowColumn>
			      </TableRow>
			      <TableRow className="tableRow">
			        <TableRowColumn>Legal NT</TableRowColumn>
			        <TableRowColumn>Legal NT</TableRowColumn>
			        <TableRowColumn>156</TableRowColumn>
			        <TableRowColumn>Hull</TableRowColumn>
			      </TableRow>
			    </TableBody>
			  </Table>
		</section>

		<section className="table" id="productVersion">
		    <label>Product Version</label>
		      <Table selectable={false}>
			    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
			      <TableRow>
			        <TableHeaderColumn>Changelog</TableHeaderColumn>
			        <TableHeaderColumn>Staff</TableHeaderColumn>
			        <TableHeaderColumn>Ts</TableHeaderColumn>
			        <TableHeaderColumn>Version</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody displayRowCheckbox={false}>
			      <TableRow>
			        <TableRowColumn>Legal NT</TableRowColumn>
			        <TableRowColumn>Legal NT</TableRowColumn>
			        <TableRowColumn>156</TableRowColumn>
			        <TableRowColumn>Hull</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>Legal NT</TableRowColumn>
			        <TableRowColumn>Legal NT</TableRowColumn>
			        <TableRowColumn>156</TableRowColumn>
			        <TableRowColumn>Hull</TableRowColumn>
			      </TableRow>
			    </TableBody>
			  </Table>
		</section>

		<section className="table" id="productOffices">
		    <label>Product Offices</label>
		      <Table selectable={false}>
			    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
			      <TableRow>
			        <TableHeaderColumn>Mandant</TableHeaderColumn>
			        <TableHeaderColumn>OrderBy</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody displayRowCheckbox={false}>
			      <TableRow>
			        <TableRowColumn>D</TableRowColumn>
			        <TableRowColumn>premium</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>UK</TableRowColumn>
			        <TableRowColumn>premium</TableRowColumn>
			      </TableRow>
			    </TableBody>
			  </Table>
		</section>

		<section className="table" id="productCurrencies">
		    <label>Product Currencies</label>
		      <Table selectable={false}>
			    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
			      <TableRow>
			        <TableHeaderColumn>Currency</TableHeaderColumn>
			        <TableHeaderColumn>xrate</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody displayRowCheckbox={false}>
			      <TableRow>
			        <TableRowColumn>DKK</TableRowColumn>
			        <TableRowColumn>1</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>NOK</TableRowColumn>
			        <TableRowColumn>1</TableRowColumn>
			      </TableRow>
			    </TableBody>
			  </Table>
		</section>

		<section className="table" id="productOutput">
		    <label>Product Output</label>
		      <Table selectable={false}>
			    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
			      <TableRow>
			        <TableHeaderColumn>Output</TableHeaderColumn>
			        <TableHeaderColumn>Default Basis</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody displayRowCheckbox={false}>
			      <TableRow>
			        <TableRowColumn>contract</TableRowColumn>
			        <TableRowColumn>premium</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>NOK</TableRowColumn>
			        <TableRowColumn>1</TableRowColumn>
			      </TableRow>
			    </TableBody>
			  </Table>
		</section>

		<section className="table" id="productCalculations">
		    <label>Product Calculations</label>
		      <Table selectable={false}>
			    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
			      <TableRow>
			        <TableHeaderColumn>Property</TableHeaderColumn>
			        <TableHeaderColumn>Compute Order</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody displayRowCheckbox={false}>
			      <TableRow>
			        <TableRowColumn>key_currency</TableRowColumn>
			        <TableRowColumn>3</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>mandant_short</TableRowColumn>
			        <TableRowColumn>2</TableRowColumn>
			      </TableRow>
			    </TableBody>
			  </Table>
		</section>

		<section className="table" id="productHprod">
		    <label>Product Hprod</label>
		      <Table selectable={false}>
			    <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
			      <TableRow>
			        <TableHeaderColumn>IBS Product</TableHeaderColumn>
			      </TableRow>
			    </TableHeader>
			    <TableBody displayRowCheckbox={false}>
			      <TableRow>
			        <TableRowColumn>Pant Erw Angebot Krieg</TableRowColumn>
			      </TableRow>
			      <TableRow>
			        <TableRowColumn>Pant Erweitert Krieg Vertrag</TableRowColumn>
			      </TableRow>
			    </TableBody>
			  </Table>
		</section>

		</div>
    );
  }
}

export default Product;
