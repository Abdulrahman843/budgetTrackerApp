# Budget Tracker

This project is a **Budget Tracker** application that helps users manage their income and expenses. It calculates disposable income by subtracting expenses from income and prompts the user to decide how much of the disposable income they would like to save. Users can also add new income or expense items to the tracker.

## Features

- **Track Income and Expenses**: Add income sources and expense items to track your finances.
- **Display Disposable Income**: The app calculates and displays disposable income after subtracting expenses from income.
- **Add Items Dynamically**: Add new income or expense items via prompts and dynamically update the displayed list.
- **Persistent Data**: The app uses `sessionStorage` to store data, making it persist across the session.
- **Savings Prompt**: The app allows users to specify how much of their disposable income they want to save.

## Technologies Used

- **HTML**: Used to structure the webpage and create the user interface.
- **CSS**: Provides styling for the income and expense lists and the overall layout.
- **JavaScript**: Handles the logic for adding, displaying, and calculating income and expense items, as well as managing user interactions and storage.

## How to Use

1. **Clone the repository**:
    ```bash
    git clone https://github.com/Abdulrahman843/budget-tracker.git
    ```

2. **Navigate to the project directory**:
    ```bash
    cd budget-tracker
    ```

3. **Open the `index.html` file in your browser**:
    You can open the file by double-clicking it, or use the following command depending on your operating system:
    - **Windows**: `start index.html`
    - **macOS**: `open index.html`
    - **Linux**: `xdg-open index.html`

4. **Interact with the App**:
    - Upon loading, the app will display initial income and expense items.
    - The app will prompt you to add new income and expense items.
    - The total disposable income is calculated, and you can decide how much to save from it.

## Example

### Default Income Items:
- Salary: $4000 (Recurring)
- Freelancing: $1500 (Non-Recurring)
- Investment Returns: $300 (Recurring)
- Rental Income: $2500 (Recurring)
- Part-Time Job: $1200 (Non-Recurring)

### Default Expense Items:
- Rent: $1500 (Recurring)
- Groceries: $350 (Recurring)
- Utilities: $200 (Recurring)
- Internet: $60 (Recurring)
- Transportation: $250 (Recurring)

### Calculated Disposable Income:
After displaying the income and expenses, the app calculates and displays the total disposable income. The app will prompt the user to decide how much of the disposable income to save.

### Adding New Items:
The app prompts the user to add new income and expense items, which are then stored in `sessionStorage` and dynamically added to the list.

## How It Works

1. **BudgetItem Class**: A class is defined for budget items, which includes the name, amount, and a boolean indicating if the item is recurring.
2. **Session Storage**: Income and expenses are stored in `sessionStorage`, ensuring that the data persists during the session.
3. **Adding Items**: New items can be added to the budget by the user through prompts, which are stored and displayed in the list.
4. **Calculations**: The app calculates the total income, total expenses, and disposable income by summing the amounts and subtracting expenses from income.
5. **Savings Prompt**: The app asks the user how much they would like to save from their disposable income and updates the displayed income accordingly.

## CSS

The CSS file provides basic styling for the page, including:
- Centering the header (`<h1>`) element.
- Styling the income and expense lists (`#incomeList`, `#expenseList`) with margins and item spacing.
- Styling the summary section (`#summary`) where the disposable income is displayed.

## Contribution

Feel free to fork this repository, make improvements, or submit pull requests. Contributions are welcome!

## License

This project is open-source and available under the [MIT License](LICENSE).
