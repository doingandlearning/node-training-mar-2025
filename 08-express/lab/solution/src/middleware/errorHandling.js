export default function errorHandling(
  err,
  req,
  res,
  next
) {
  console.log("I was invoked!");
  console.log(err.stack);
  res.status(400).json({ message: `Something broke. ${err.message}` });
  return;
}
