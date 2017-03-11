find . -name '.DS_Store' -type f -delete

#!/bin/bash
./remove.sh
./packages.sh
./push.sh
