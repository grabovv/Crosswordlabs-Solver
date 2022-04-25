function getIdFromRowAndCol(r, c)
{
  return '#cx-' + r + "-" + c;
}
	
function setChar(r, c, chr)
{
  var id = getIdFromRowAndCol(r, c);
  $(id).find(".cx-a").text(chr);
}
	
	
for (var i = 0; i < grid.length; i++) 
{
  for (var z = 0; z < grid[i].length; z++) 
  {
    if (grid[i][z]) 
    {
      setChar(i,z,grid[i][z].char);
    }
  }
}
