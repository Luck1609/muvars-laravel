import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

export default function ListItems({ options = [] }) {

  return (
    <List
      className="w-full bg-white divide-y rounded-md shadow-custom p-0"
    >
      {
        options?.map(({label, title, component, button = true, Icon}) => {
          return (
            <ListItem key={title.replace(' ', '_')}>
              {
                button ? (
                  <ListItemButton>
                    <div className="w-full flex items-center">
                      <div className="flex items-center">
                        {
                          Icon ? (
                            <Icon className="mr-4" size={40} />
                          ) : null
                        }

                        <div className="w-full grow">
                          <label className="font-bold block w-full">{title}</label>
                          <label className="block text-lg">{label}</label>
                        </div>
                      </div>

                      {component}
                    </div>
                  </ListItemButton>
                ) : (
                  <div className="w-full flex items-center p-2">
                    <div className="w-full flex items-center">
                      {
                        Icon ? (
                          <Icon className="mr-4" size={40} />
                        ) : null
                      }

                      <div className="w-full grow">
                        <label className="font-bold block w-full">{title}</label>
                        <label className="block text-lg">{label}</label>
                      </div>
                    </div>

                    {component}
                  </div>
                )
              }
            </ListItem>
          )
        })
      }
    </List>
  );
}
