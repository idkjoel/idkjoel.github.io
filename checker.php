<?php
	function checkUDID($udid)
	{
		$acceptedUDID = array('e96e0f14b779f81a84083fdf8889bf1a909331ce', 'd1b498be672e452d2baaf90c5e9ef85d60c15435', '2d76499ae472d7ff2f32a1951f4cfb126d88218b', 'f77a6644fdc09b59a3dad6cc816ac51f35d7ae30', '5c6416404c336196fc86248d518d5fc302ea6983', '23858681102a0d16482a0f77642a2269801beca2', '34f0dc01e49e619a916f8acfd826407e71fc58d2');

		if (in_array($udid, $acceptedUDID))
			return 'YES';
		else
			return 'NO';
	}
?>
