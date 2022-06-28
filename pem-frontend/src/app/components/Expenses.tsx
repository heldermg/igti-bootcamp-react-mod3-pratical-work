import { Box, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core"
import { currencyNumberFormat } from "../util/util"
import { IExpense, Expense } from "../components"
import { green } from "@material-ui/core/colors"

interface IExpensesProps {
  children: IExpense[]
}

function Expenses({ children: expenses }: IExpensesProps) {
  let initValue: number = 0
  let totalExpense: number = 0
  if (expenses) {
    totalExpense = expenses.reduce((acumulator, currentExpense) => {
      return acumulator + currentExpense.value
    }, initValue)
  }

  return (
    <>
      <Box
        marginRight="50px"
        display="flex" 
        alignItems="center"
        justifyContent="flex-end">
          <strong style={{ whiteSpace: "pre", fontSize: "20px" }}>
            Total Expense: {currencyNumberFormat.format(totalExpense)}
          </strong>
      </Box>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nr.</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Category</TableCell>
            <TableCell>Day</TableCell>
            <TableCell>Value</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {expenses.map((expense:IExpense, idx: number) => {
            return (
              <Expense key={expense.id} expenseNumber={idx+1}>
                {expense}
              </Expense>
            )
          })}
        </TableBody>
      </Table>
    </>
  )
}

export { Expenses }