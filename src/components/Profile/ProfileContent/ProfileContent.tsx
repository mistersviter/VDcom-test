import React, { useMemo, useState } from 'react';
import MaterialReactTable from 'material-react-table';
import type { MRT_ColumnDef } from 'material-react-table';
import './ProfileContent.css';
import { IContact } from '../../../interfaces/currentUserInterFace';
import { useAppSelector, useAppDispatch } from '../../../hooks/hooks';
import { filterContacts } from '../../../slices/userSlice';
import { Box, IconButton, Pagination } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { AddNewContactModal } from './AddNewContactModal/AddNewContactModal';

interface IProfileContentProps {
  activePage: string;
}

export default function ProfileContent({ activePage }: IProfileContentProps) {
  const filteredUserContacts = useAppSelector(
    (state) => state.user.filteredContacts
  );
  const dispatch = useAppDispatch();

  function getCaption(activePage: string): string {
    switch (activePage) {
      case 'contacts':
        return 'Total Contacts';
      case 'calendar':
        return 'Calendar';
      case 'report':
        return 'Project Report';
      default:
        return 'Total Contacts';
    }
  }

  const columns = useMemo<MRT_ColumnDef<IContact>[]>(
    () => [
      {
        accessorKey: 'id',
        header: 'Client ID',
        minSize: 100,
        maxSize: 400,
        size: 106,
        Cell: ({ renderedCellValue, row }) => (
          <div className='cell-wrapper'>{renderedCellValue}</div>
        ),
      },
      {
        accessorKey: 'name',
        header: 'Client name',
        minSize: 100,
        maxSize: 400,
        size: 136,
        Cell: ({ renderedCellValue, row }) => (
          <div className='cell-wrapper'>{renderedCellValue}</div>
        ),
      },
      {
        accessorKey: 'trn_ppsn',
        header: 'TRN/PPSN',
        minSize: 100,
        maxSize: 400,
        size: 130,
        Cell: ({ renderedCellValue, row }) => (
          <div className='cell-wrapper'>{renderedCellValue}</div>
        ),
      },
      {
        accessorKey: 'year',
        header: 'Year end',
        minSize: 100,
        maxSize: 400,
        size: 108,
        Cell: ({ renderedCellValue, row }) => (
          <div className='cell-wrapper'>{renderedCellValue}</div>
        ),
      },
      {
        accessorKey: 'ard',
        header: 'ARD',
        minSize: 70,
        maxSize: 400,
        size: 80,
        Cell: ({ renderedCellValue, row }) => (
          <div className='cell-wrapper'>{renderedCellValue}</div>
        ),
      },
      {
        accessorKey: 'company_number',
        header: 'Company number',
        minSize: 100,
        maxSize: 400,
        size: 166,
        Cell: ({ renderedCellValue, row }) => (
          <div className='cell-wrapper'>{renderedCellValue}</div>
        ),
      },
      {
        accessorKey: 'email',
        header: 'Email',
        minSize: 80,
        maxSize: 400,
        size: 80,
        Cell: ({ renderedCellValue, row }) => (
          <div className='cell-wrapper'>{renderedCellValue}</div>
        ),
      },
      {
        accessorKey: 'phone',
        header: 'Phone number',
        minSize: 100,
        maxSize: 400,
        size: 160,
        Cell: ({ renderedCellValue, row }) => (
          <div className='cell-wrapper'>{renderedCellValue}</div>
        ),
      },
      {
        accessorKey: 'address',
        header: 'Company address',
        Cell: ({ renderedCellValue, row }) => (
          <div className='cell-wrapper'>{renderedCellValue}</div>
        ),
      },
    ],
    []
  );

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 7;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = filteredUserContacts?.slice(firstIndex, lastIndex);
  const npage = Math.ceil(filteredUserContacts!.length / recordsPerPage);

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const [createModalOpen, setCreateModalOpen] = useState(false);

  const handleCreateNewRow = (values: IContact) => {
    const tempContacts = [...filteredUserContacts!];
    tempContacts.splice(0, 0, values);
    dispatch(filterContacts(tempContacts));
  };

  return (
    <main className='profile-content'>
      <div className='profile-content__header'>
        <h2 className='profile-content__caption'>{getCaption(activePage)}</h2>
        {activePage === 'contacts' && (
          <button
            className='profile-content__add-btn'
            onClick={() => setCreateModalOpen(true)}
          >
            Add +
          </button>
        )}
      </div>
      {activePage === 'contacts' && (
        <>
          <MaterialReactTable
            layoutMode='grid'
            enableTableFooter={false}
            enableBottomToolbar={false}
            manualPagination={true}
            columns={columns}
            data={records!}
            enableColumnActions={false}
            enableRowSelection
            enableGlobalFilter={false}
            enableTopToolbar={false}
            enableColumnFilters={false}
            muiTableBodyRowProps={{
              //hover: false,
              sx: {
                height: '78px',
                boxShadow: '0 4px 4px rgba(0, 0, 0, 0.25)',
                '& Mui-selected': {
                  backgroundColor: '#edbc4a',
                },
              },
            }}
            enableColumnResizing
            muiTablePaperProps={{
              sx: {
                background: 'none',
                border: 'none',
                boxShadow: 'none',
                marginBottom: '10px',
              },
            }}
            muiTableProps={{
              sx: {
                tableLayout: 'fixed',
                width: '100%',
                maxHeight: '700px',
              },
            }}
            muiTableBodyCellProps={{
              sx: {
                display: 'flex',
                verticalAlign: 'middle !important',
                font: "400 20px/30px 'Poppins', sans-serif",
                opacity: '.8',
              },
            }}
            muiTableHeadCellProps={{
              sx: {
                font: "400 20px/30px 'Poppins', sans-serif",
                opacity: '.8',
              },
            }}
            muiTableBodyProps={{
              sx: {
                gap: '12px',
                '& tr:last-child': {
                  marginBottom: '12px',
                },
              },
            }}
            displayColumnDefOptions={{
              'mrt-row-actions': {
                header: 'Action',
                size: 80,
              },
              'mrt-row-select': {
                size: 40,
              },
            }}
            enableRowActions
            positionActionsColumn='last'
            enableEditing
            onEditingRowSave={(row) => {
              const tempContacts = [...filteredUserContacts!];
              tempContacts[row.row.index] = { ...row.values };
              dispatch(filterContacts(tempContacts));
              row.exitEditingMode();
            }}
            renderRowActions={({ row, table }) => (
              <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '4px' }}>
                <IconButton
                  color='warning'
                  onClick={() => {
                    table.setEditingRow(row);
                  }}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color='error'
                  onClick={() => {
                    const tempContacts = [...filteredUserContacts!];
                    tempContacts!.splice(row.index, 1);
                    dispatch(filterContacts(tempContacts));
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}
          />
          <Pagination
            count={npage}
            onChange={handleChangePage}
            className='pagination'
            sx={{
              '& .MuiPaginationItem-root': {
                font: "400 20px/30px 'Titillium Web', sans-serif",
              },
              '& .Mui-selected': {
                color: '#fff',
                backgroundColor: '#edbc4a !important',
              },
            }}
          />
          <AddNewContactModal
            columns={columns}
            open={createModalOpen}
            onClose={() => setCreateModalOpen(false)}
            onSubmit={handleCreateNewRow}
          />
        </>
      )}
    </main>
  );
}
