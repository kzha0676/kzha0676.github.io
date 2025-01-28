import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PsychologyIcon from '@mui/icons-material/Psychology';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DescriptionIcon from '@mui/icons-material/Description';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

interface NavigationProps {
  parentToChild: {
    mode: string;
  };
  modeChange: () => void;
}

interface NavItem {
  text: string;
  icon: JSX.Element;
  componentId: string;
}

const navItems: NavItem[] = [
  { text: 'Home', icon: <HomeIcon />, componentId: 'main' },
  { text: 'Expertise', icon: <PsychologyIcon />, componentId: 'expertise' },
  { text: 'Timeline', icon: <AccessTimeIcon />, componentId: 'history' },
  { text: 'Projects', icon: <DescriptionIcon />, componentId: 'project' }
];

function Navigation({parentToChild, modeChange}: any) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState('main');

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const scrollToSection = (componentId: string) => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const viewHeight = window.innerHeight;
      const scrollPosition = window.scrollY;
      
      // Find the section that's most visible in the viewport
      navItems.forEach(({ componentId }) => {
        const element = document.getElementById(componentId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + scrollPosition;
          // If element is in view and closest to the top of viewport
          if (elementTop <= scrollPosition + (viewHeight * 0.3)) {
            setActiveSection(componentId);
          }
        }
      });
    };
  
    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();
  
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Active section styles
  const getIconColor = (componentId: string) => {
    if (activeSection === componentId) {
      return parentToChild.mode === 'dark' ? '0d1116' : 'rgba(255, 255, 255, 0.7)';
    }
    return parentToChild.mode === 'dark' ? 'rgba(255, 255, 255, 0.7)' : '0d1116';
    // Changed from 0.5 to 0.7 opacity for better visibility in light mode
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer 
        variant="permanent" 
        open={open}
        sx={{
          '& .MuiDrawer-paper': {
            backgroundColor: parentToChild.mode === 'dark' ? '#0d1116' : '#ffffff',
            boxShadow: parentToChild.mode === 'dark'
              ? '4px 0 6px -1px rgba(0, 0, 0, 0.1)'  // Subtle shadow for dark mode
              : '4px 0 6px -1px rgba(0, 0, 0, 0.1)',        // Subtle shadow for light mode
          }
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <Box>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={[
                {
                  margin: '12px',
                  justifyContent: 'center',
                  color: getIconColor(''),
                },
                open && { display: 'none' },
              ]}
            >
              <MenuIcon />
            </IconButton>

            {open && (
              <DrawerHeader>
                <IconButton 
                  onClick={handleDrawerClose}
                  sx={[
                    {
                      color: getIconColor(''),
                    },
                  ]}>
                  {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                </IconButton>
              </DrawerHeader>
            )}
            <Divider />
          </Box>

          <List>
            {navItems.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
                <ListItemButton
                  onClick={() => scrollToSection(item.componentId)}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                      transition: 'all 0.3s',
                    },
                    open
                      ? {
                          justifyContent: 'initial',
                        }
                      : {
                          justifyContent: 'center',
                        },
                    activeSection === item.componentId && {
                      backgroundColor: parentToChild.mode === 'dark' 
                        ? 'rgb(89, 0, 190)' 
                        : 'rgb(89, 0, 190)',
                    }
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      {
                        minWidth: 0,
                        justifyContent: 'center',
                        transition: 'all 0.3s',
                        color: getIconColor(item.componentId),
                      },
                      open
                        ? {
                            mr: 3,
                          }
                        : {
                            mr: 'auto',
                          },
                    ]}
                  >
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.text}
                    sx={[
                      {
                        transition: 'all 0.3s',
                        color: getIconColor(item.componentId),
                      },
                      open
                        ? {
                            opacity: 1,
                          }
                        : {
                            opacity: 0,
                          },
                    ]}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          <Box sx={{ marginTop: 'auto' }}>
            <Divider />
            <ListItem disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                onClick={modeChange}
                sx={[
                  {
                    minHeight: 48,
                    px: 2.5,
                  },
                  open
                    ? {
                        justifyContent: 'initial',
                      }
                    : {
                        justifyContent: 'center',
                      },
                ]}
              >
                <ListItemIcon
                  sx={[
                    {
                      minWidth: 0,
                      justifyContent: 'center',
                      color: getIconColor(''),
                    },
                    open
                      ? {
                          mr: 3,
                        }
                      : {
                          mr: 'auto',
                        },
                  ]}
                >
                  {parentToChild.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                </ListItemIcon>
                <ListItemText
                  primary={parentToChild.mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
                  sx={[
                    {
                      color: getIconColor(''), // Add this line to match other text colors
                      transition: 'all 0.3s',
                    },
                    open
                      ? {
                          opacity: 1,
                        }
                      : {
                          opacity: 0,
                        },
                  ]}
                />
              </ListItemButton>
            </ListItem>
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
}

export default Navigation;