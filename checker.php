<?php
	function checkUDID($udid)
	{
		$acceptedUDID = array('5c6416404c336196fc86248d518d5fc302ea6983', '23858681102a0d16482a0f77642a2269801beca2');

		if (in_array($udid, $acceptedUDID))
			return 'YES';
		else
			return 'NO';
	}
?>
