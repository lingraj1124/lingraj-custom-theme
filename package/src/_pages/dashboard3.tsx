

import {useEffect,useState,useRef} from 'react';
import { DataGridPro,LicenseInfo, DataGridProProps } from '@mui/x-data-grid-pro';
import LinearProgress from '@mui/material/LinearProgress';
import { assets_columns, tester} from '../_constants/appConstants'

const MAX_ROW_LENGTH = 500;

function sleep(duration: number) {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

export default function Dashboard3() {
    const X_DATA_GRID_LICENSE_KEY = `39d775303784880f3a3f1d519897dc7cT1JERVI6MzYxNjUsRVhQSVJZPTE2NzQxMTQ1NjYwMDAsS0VZVkVSU0lPTj0x`.toString();
    LicenseInfo.setLicenseKey(
        X_DATA_GRID_LICENSE_KEY,
    );

  const [loading, setLoading] = useState(false);
  const [loadedRows, setLoadedRows] = useState<any>([]);
  const mounted = useRef(true);

  const loadServerRows = async (newRowLength: number) => {
    setLoading(true); 
    if(newRowLength === 0){
        newRowLength = 20
    }
    
    const newData = await tester(loadedRows.length, newRowLength);
    
    // Simulate network throttle
    await sleep(Math.random() * 500 + 100);

    if (mounted.current) {
      setLoading(false);
      setLoadedRows(loadedRows.concat(newData));
    }
  };

  const handleOnRowsScrollEnd: DataGridProProps['onRowsScrollEnd'] = (params) => {
    if (loadedRows.length <= MAX_ROW_LENGTH) {
      loadServerRows(params.viewportPageSize);
    }
  };

  useEffect(() => {
    return () => {
      mounted.current = false;
    };
  }, []);

  return (
    <div style={{ height: '75vh', width: '100%' }}>
      <DataGridPro
        getRowClassName={(params) =>
            params.indexRelativeToCurrentPage % 2 === 0 ? 'even-row-list-item' : 'odd-row-list-item'
          }
        columns={assets_columns}
        checkboxSelection
        rows={loadedRows}
        loading={loading}
        hideFooterPagination
        onRowsScrollEnd={handleOnRowsScrollEnd}
        components={{
          LoadingOverlay: LinearProgress,
        }}
      />
    </div>
  );
}
