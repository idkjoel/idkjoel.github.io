#!/bin/bash
dpkg-deb -bZgzip projects/pluto debs
dpkg-deb -bZgzip projects/acai debs
dpkg-deb -bZgzip projects/tumble debs
dpkg-deb -bZgzip projects/elCapLoader debs
dpkg-deb -bZgzip projects/smartLock debs
