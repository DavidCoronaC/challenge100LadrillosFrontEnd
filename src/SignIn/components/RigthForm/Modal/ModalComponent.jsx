import React, { forwardRef, useImperativeHandle} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import PropTypes from 'prop-types';
import ClearIcon from '@material-ui/icons/Clear';
import { ModalPhoneInfoContainer } from './ModalPhoneInfoContainer';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(() => ({
    paperQuote:{
        background: '#fff',
        position: 'absolute',
        width: '40%',
        height: '85vh',
        borderRadius: '.5vw',
        outline: 'none',
        textAlign: 'center',
        alignContent: 'center',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        ['@media (max-width: 520px)']: { 
            width: '90%',
            height: '95vh',
        }
    },
    containerModal:{
        width: '100%',
        height: '85vh',
        borderRadius: '.5vw',
        background: '#fff',
        display: 'grid',
        gridTemplateRows: '.1fr 1fr',
        gridTemplateColumns: '1fr',
        ['@media (max-width: 520px)']: { 
            width: '100%',
            height: '95vh',
        }
    },
    closeIcon: {
        color: '#000',
        width: '2vw',
        height: '2vw',
        cursor: 'pointer',
        justifySelf:'end',
        alignSelf: 'center',
        marginRight: '1.5vw',
        ['@media (max-width: 520px)']: { 
            width: '1.5rem',
            height: '1.5rem',
            marginRight: '.3rem',
            marginTop: '.1rem',
        }
    },
}));

export const ModalComponent = forwardRef((props, ref) => {

    const classes = useStyles();
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    

    useImperativeHandle(
        ref,
        () => ({
            handleOpen() {
                setOpen(true);
            }
        }),
    )
    
    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={ classes.paperQuote }>
            <div className={ classes.containerModal }>
                <div className={classes.closeIcon}>
                    <ClearIcon onClick={handleClose}/>
                </div>
                <div className="">
                    <ModalPhoneInfoContainer handleClose={handleClose}/>
                </div>
            </div>
        </div>
    );
    
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
            >
            {body}
        </Modal>
    )
    
})

ModalComponent.propTypes = {
    toggle: PropTypes.any,
};