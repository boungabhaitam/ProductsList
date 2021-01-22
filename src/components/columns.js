import React from 'react';

export const COLUMNS = [
    {
        Header: 'Id',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        accessor: '_id',
    },
    {
        Header: 'Name',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        accessor: 'name',
    },
    {
        Header: 'Category',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        accessor: 'category',
    },
    {
        Header: 'Subcategory',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        accessor: 'subcategory',
    },
    {
        Header: 'CreatedAt',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        accessor: 'createdAt',
    },
    {
        Header: 'UpdatedAt',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        accessor: 'updatedAt',
    },
    {
        Header: 'ModelId',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        accessor: 'modelId',
    },
    {
        Header: 'Pid',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        accessor: 'pid',
    },
    {
        Header: 'Features',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        id:'Features',
        accessor : data =>
            data.features.map(item => (
              <div>
                <span>{item}</span>
              </div>
            ))
    },
    {
        Header: 'Specifications',
        headerStyle : {backgroundColor : '#222831', color:'white'},
        columns: [
            {
            Header : 'Name',
            headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
            id:'specificationName',
            accessor : data =>
            data.specifications.map(item => (
              <div>
                <span>{item.name}</span>
              </div>
            ))
        },
        {
            Header : 'Category',
            headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
            id:'specificationCategory',
            accessor : data =>
            data.specifications.map(item => (
              <div>
                <span>{item.category}</span>
              </div>
            ))
        },
        {
            Header : 'Value',
            headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
            id:'specificationValue',
            accessor : data =>
            data.specifications.map(item => (
              <div>
                <span>{item.value}</span>
              </div>
            ))
        },
    ]
    },
    {
        Header: 'Description',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        id:'Description',
        accessor : data =>
        data.description.split(',').map((line)=><div>{line}</div>),
        
    },
    {
        Header: 'Datasheet',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        accessor: 'datasheet',
    },
    {
        Header: 'Link',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        accessor: 'link',
    },
    {
        Header: 'Thumbnail',
        headerStyle : {backgroundColor : '#2F4F4F', color:'white'},
        accessor: 'thumbnail',
    }
]