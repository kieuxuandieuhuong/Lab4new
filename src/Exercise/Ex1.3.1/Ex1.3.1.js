import 'typeface-roboto';
import React, { useState } from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import First from './First';
import Second from './Second';
import Third from './Third';
import { AppBar } from '@mui/material';

// //ex1.3
// export default function App({ links = [] }) {
//   const [open, setOpen] = useState(false);

// function toggleDrawer({ type, key }) {
//    if (type === 'keydown' && (key === 'Tab' || key === 'Shift')) {
//       return;
//   }
// //     setOpen(!open);
//    }

//    return (
//      <Router>
//        <Button onClick={toggleDrawer}>Open Nav</Button>
//        <section>
//          <Route path='/first' element={<First />} />
//          <Route path='/second' element={<Second />} />
//          <Route path='/third' element={<Third />} />
//        </section>
//        <Drawer open={open} onClose={toggleDrawer}>
//          <div
//            style={{ width: 250 }}
//            role='presentation'
//            onClick={toggleDrawer}
//            onKeyDown={toggleDrawer}>
//            <List>
//              {links.map((link) => (
//                <ListItem button key={link.url} component={Link} to={link.url}>
//                  <ListItemText primary={link.name} />
//                </ListItem>
//            ))}
//           </List>
//         </div>
//        </Drawer>
//     </Router>
//   );
//  }
//  App.defaultProps={
//  links:[
//     { url: '/first', name:'First Page'},
//    { url: '/second', name:'Second Page'},
//   { url: '/third', name:'Third Page'},

//   ],
// };

//1.3.1
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';


const tabContentStyle = {
    padding: 16,
  };
  
  function TabContent({ value }) {
    return (
      <div>
        <AppBar position="static">
          <Tabs value={value}>
            <Tab label="Item One" component={Link} to="/" />
            <Tab label="Item Two" component={Link} to="/page2" />
            <Tab label="Item Three" component={Link} to="/page3" />
          </Tabs>
        </AppBar>
        <Typography component="div" style={tabContentStyle}>
          {value === 0 && <div>Item One Content</div>}
          {value === 1 && <div>Item Two Content</div>}
          {value === 2 && <div>Item Three Content</div>}
        </Typography>
      </div>
    );
  }
  
  export default function Ex131() {
    return (
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <TabContent
                value={0}
              />
            }
          />
          <Route
            path="/page2"
            element={
              <TabContent
                value={1}
              />
            }
          />
          <Route
            path="/page3"
            element={
              <TabContent
                value={2}
              />
            }
          />
        </Routes>
      </Router>
    );
  }