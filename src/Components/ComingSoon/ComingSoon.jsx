import React, { useState, useEffect } from 'react'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Countdown from 'react-countdown';

const theme = createTheme({
    palette: {
        primary: {
            main: '#429feb', // Set your desired primary color
        },
    },
});

const ComingSoon = ({ targetDate }) => {

    const desktopRenderer = ({ days, hours, minutes, seconds }) => (
        <Typography variant="h3" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
            {`${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </Typography>

    );
    const mobileRenderer = ({ days, hours, minutes, seconds }) => (
        <Typography variant="h4" sx={{ fontWeight: 'bold', color: theme.palette.primary.main }}>
            {`${days.toString().padStart(2, '0')}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`}
        </Typography>

    );

    const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1450);

    const updateIsDesktop = () => {
        setIsDesktop(window.innerWidth > 1450);
    };

    useEffect(() => {
        window.addEventListener('resize', updateIsDesktop);
        return () => {
            window.removeEventListener('resize', updateIsDesktop);
        };
    }, []);

    return (
        <div className="-mt-8 lg:my-28 flex flex-col w-screen items-center space-y-2 lg:space-y-8 ">
            <div className=" text-center text-4xl lg:text-7xl">&#123;Coming Soon&#125;</div>
            <div>
                {isDesktop ? (
                    <ThemeProvider theme={theme}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f5f5f5', // Set your desired background color
                                padding: '16px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(66,159,235,0.4)', // Add a subtle shadow
                            }}
                        >
                            <Countdown date={targetDate} renderer={desktopRenderer} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>
                            </Typography>
                        </div>
                    </ThemeProvider>
                ) : (
                    <ThemeProvider theme={theme}>
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: '#f5f5f5', // Set your desired background color
                                padding: '8px',
                                borderRadius: '8px',
                                boxShadow: '0 2px 4px rgba(66,159,235,0.4)', // Add a subtle shadow
                            }}
                        >
                            <Countdown date={targetDate} renderer={mobileRenderer} />
                            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#333' }}>
                            </Typography>
                        </div>
                    </ThemeProvider>
                )}

            </div >
        </div >
    )
}

export default ComingSoon