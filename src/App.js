import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

// Import react components
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import ExpenseItem from './components/ExpenseItem';
import AllocationForm from './components/AllocationForm';

// Add code to import the other components here under
import { AppProvider } from './context/AppContext';
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                    {/*     Budget component */}
                        <div className='col-sm'>
                            <Budget />
                        </div>      

                            
                        <div className='col-sm'>
                            <Remaining/>
                        </div>

                           
                        <div className = 'col-sm'>
                            <ExpenseTotal />    
                        </div>       
                        
                            {/* Add ExpenseList component here under */}
                        <div>
                            <ExpenseList />    
                        </div>        

                            {/* Add ExpenseItem component here under */} 
                        <div>
                            <ExpenseItem />    
                        </div>       

                            {/* Add AllocationForm component here under */} 
                        <div>
                            <AllocationForm />    
                        </div>        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
