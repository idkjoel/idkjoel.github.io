#!/bin/bash
dpkg-deb -bZgzip projects/pluto debs
dpkg-deb -bZgzip projects/acai debs
dpkg-deb -bZgzip projects/softy debs
