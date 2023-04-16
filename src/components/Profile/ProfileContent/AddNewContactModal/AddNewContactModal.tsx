import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@mui/material';
import { useState } from 'react';
import { IContact } from '../../../../interfaces/currentUserInterFace';
import { MRT_ColumnDef } from 'material-react-table';

interface IAddNewContactModalProps {
  columns: MRT_ColumnDef<IContact>[];
  onClose: () => void;
  onSubmit: (values: IContact) => void;
  open: boolean;
}

export const AddNewContactModal = ({
  open,
  columns,
  onClose,
  onSubmit,
}: IAddNewContactModalProps) => {
  const [values, setValues] = useState<any>(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {} as any)
  );

  const handleSubmit = () => {
    onSubmit(values);
    onClose();
  };

  return (
    <Dialog open={open}>
      <DialogTitle textAlign='center'>Add New Contact</DialogTitle>
      <DialogContent>
        <form onSubmit={(e) => e.preventDefault()}>
          <Stack
            sx={{
              width: '100%',
              minWidth: { xs: '300px', sm: '360px', md: '400px' },
              gap: '1.5rem',
            }}
          >
            {columns.map((column) => (
              <TextField
                key={column.accessorKey}
                label={column.header}
                name={column.accessorKey}
                onChange={(e) =>
                  setValues({ ...values, [e.target.name]: e.target.value })
                }
              />
            ))}
          </Stack>
        </form>
      </DialogContent>
      <DialogActions sx={{ p: '1.25rem' }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant='contained'>
          Add New Contact
        </Button>
      </DialogActions>
    </Dialog>
  );
};
