<Box color="red" width="100%" display="flex" justifyContent="space-between" alignItems="center">
<Button onClick={() => {
    redirectToCheckout2();
}} variant="contained" disableElevation color="primary" disabled={isloading}>
          {isloading ? "Loading...": "Post Job"} 
    </Button>
</Box>